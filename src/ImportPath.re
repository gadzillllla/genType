open GenTypeCommon;

type t = string;

let react = "react";
let reasonReactPath = (~config) => config.reasonReactPath;
let bsBlockPath = (~config) => config.bsBlockPath;

let bsCurryPath = (~config) => config.bsCurryPath;

let fromModule = (~config, ~dir, ~importExtension, moduleName) => {
  let withNoPath = (moduleName |> ModuleName.toString) ++ importExtension;
  switch (config.importPath) {
  | Relative => NodeFilename.concat(dir, withNoPath)
  | Node => withNoPath
  };
};

let fromStringUnsafe = s => s;

let chopExtensionSafe = s =>
  try (s |> Filename.chop_extension) {
  | Invalid_argument(_) => s
  };

let toCmt = (~outputFileRelative, s) =>
  Filename.(
    concat(outputFileRelative |> dirname, (s |> chopExtensionSafe) ++ ".cmt")
  );
let toString = s => s;