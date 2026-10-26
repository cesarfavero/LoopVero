# `normalizeSourcePath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/upload-file-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774642-774656](../../../../../../../reference/runtime/host-main.cjs#L774642-L774656) | `FunctionDeclaration` | não | `raw` |
| [evaluation:574245-574259](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574245-L574259) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774642-774656](../../../../../../../reference/runtime/host-main.cjs#L774642-L774656) | 3 | 0 | 0 | 1 | 3 | 0 |
| [evaluation:574245-574259](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574245-L574259) | 3 | 0 | 0 | 1 | 3 | 0 |

### host:774642

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `import_node_path168.posix.isAbsolute`, `import_node_path168.posix.normalize`, `new SandToolInputError`, `normalized.endsWith`, `raw.includes`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `df47a810b443930d418de1dd949213048eb654e5009acf9f249406854bb38a46`.

### evaluation:574245

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `import_node_path39.posix.isAbsolute`, `import_node_path39.posix.normalize`, `new SandToolInputError`, `normalized.endsWith`, `raw.includes`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `82d9263e21a297e3fe3644ffbf91b7db7010b281b1e641aa14c0dfa9366001ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
