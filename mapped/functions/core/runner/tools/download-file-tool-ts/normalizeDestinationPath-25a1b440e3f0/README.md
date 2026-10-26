# `normalizeDestinationPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/download-file-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773806-773821](../../../../../../../reference/runtime/host-main.cjs#L773806-L773821) | `FunctionDeclaration` | não | `raw` |
| [evaluation:573027-573042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573027-L573042) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773806-773821](../../../../../../../reference/runtime/host-main.cjs#L773806-L773821) | 3 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:573027-573042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573027-L573042) | 3 | 0 | 0 | 2 | 2 | 0 |

### host:773806

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `import_node_path167.posix.isAbsolute`, `import_node_path167.posix.normalize`, `new SandToolInputError`, `nonEmpty5`, `normalized.endsWith`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `c66ca73cf8ee8a16b6d5e8bd284b77c55501353890e84d9c83c263818e163b2d`.

### evaluation:573027

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `import_node_path38.posix.isAbsolute`, `import_node_path38.posix.normalize`, `new SandToolInputError`, `nonEmpty4`, `normalized.endsWith`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `6a43096c559e6d74bb773ebe3ad0990eb5bbf772bb70ae71128b12b4ac047e3f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
