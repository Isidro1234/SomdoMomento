import { Button, HStack, Input, Spinner } from "@chakra-ui/react";
import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  memo,
} from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import * as Icon from "react-bootstrap-icons";
import { useLogiState } from "../../states/useLogic";
import { Toaster, toaster } from "../ui/toaster";
import { storemedia } from "../../logic/handleStorageData";
import { useAuthcontext } from "../../Context/AuthContextProvider";

const MAX_SIZE = 490000;

// 🟢 Extracted + memoized Quill Editor
const QuillEditor = memo(({ value, onChange, quillRef, modules, formats }) => {
  return (
    <div style={{ marginTop: 8 }}>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Escreva algo..."
        className="custom-editor"
      />
    </div>
  );
});

export default function TextEditor({ placeholder, to }) {
  const { userdata } = useAuthcontext();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(false);
  const [imageCover, setImageCover] = useState(null);

  const picref = useRef(null);
  const quillRef = useRef(null);
  const postar = useLogiState((state) => state.setPosts);

  // 🟢 Stable handler for image upload inside Quill
  const quillImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      if (file.size >= MAX_SIZE) {
        toaster.create({
          title: "Aviso Tamanho da foto",
          description: `Essa imagem tem ${Math.floor(
            file.size / 1000
          )} KB, acima do limite de 500 KB.`,
          type: "warning",
          duration: 5000,
        });
        return;
      }

      const url = await storemedia(file);
      if (!url) return;

      const range = quillRef.current.getEditor().getSelection();
      quillRef.current.getEditor().insertEmbed(range.index, "image", url);
    };
  }, []);

  // 🟢 Memoized Quill configuration
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "video"],
          [
            { align: ["", "center", "right", "justify"] },
            { color: ["blue", "red", "yellow", "black"] },
            { background: [] },
          ],
          ["clean"],
        ],
        handlers: { image: quillImage },
      },
    }),
    [quillImage]
  );

  const formats = useMemo(
    () => [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "list",
      "link",
      "image",
      "video",
      "align",
      "color",
      "background",
    ],
    []
  );

  async function pic(file) {
    setLoader(true);
    if (!file) {
      setLoader(false);
      return;
    }
    if (file.size >= MAX_SIZE) {
      toaster.create({
        title: "Aviso Tamanho da foto",
        description: `Essa imagem tem ${Math.floor(
          file.size / 1000
        )} KB, acima do limite de 500 KB.`,
        type: "warning",
        duration: 5000,
      });
      setLoader(false);
      return;
    }

    const result = await storemedia(file);
    if (!result) {
      setLoader(false);
      return;
    }
    setImageCover(result);
    toaster.create({
      title: "Foto Submetida",
      description: `Imagem submetida com sucesso`,
      type: "success",
      duration: 2000,
    });
    setLoader(false);
  }

  async function post() {
    setLoader(true);
    if (!title || !imageCover || !value || !to) {
      toaster.create({
        title: "Aviso Preencha tudo",
        description: `Preencha tudo: imagem, título e artigo`,
        type: "warning",
        duration: 5000,
      });
      setLoader(false);
      return;
    }

    const result = await postar(title, imageCover, value, to, userdata);
    if (result) {
      setLoader(false);
      setValue("");
      setTitle("");
      setImageCover(null);
      toaster.create({
        title: "Postagem publicada com sucesso",
        description: `Sua postagem foi publicada`,
        type: "success",
        duration: 5000,
      });
      return;
    }

    toaster.create({
      title: "Erro de Envio",
      description: `Erro na rede, tente novamente mais tarde.`,
      type: "error",
      duration: 5000,
    });
    setLoader(false);
  }

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <HStack>
        <Input
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          borderRadius={50}
          placeholder={placeholder}
        />
        <Input
          onChange={(e) => pic(e.currentTarget.files[0])}
          ref={picref}
          hidden
          type="file"
          accept="image/jpeg, image/png"
        />
        <Button
          onClick={() => {
            picref.current.click();
          }}
          borderWidth={1}
          borderColor={"#e1e1e1ff"}
          borderRadius={50}
          bg={"white"}
        >
          {!loader ? (
            <Icon.Image color="black" />
          ) : (
            <Spinner color={"black"} size={"sm"} />
          )}
        </Button>
      </HStack>

      <QuillEditor
        value={value}
        onChange={setValue}
        quillRef={quillRef}
        modules={modules}
        formats={formats}
      />

      <Toaster />

      <Button onClick={post} marginTop={50}>
        {!loader ? "Postar" : <Spinner color={"black"} size={"sm"} />}
      </Button>
    </div>
  );
}
