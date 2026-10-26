# `truncateGitStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639959-639972](../../../../../../reference/runtime/host-main.cjs#L639959-L639972) | `FunctionDeclaration` | não | `status` |
| [evaluation:430573-430586](../../../../../../reference/runtime/sand-eval-runner.cjs#L430573-L430586) | `FunctionDeclaration` | não | `status` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639959-639972](../../../../../../reference/runtime/host-main.cjs#L639959-L639972) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:430573-430586](../../../../../../reference/runtime/sand-eval-runner.cjs#L430573-L430586) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:639959

Chamadas escritas diretamente neste corpo: `status.slice`, `truncated.lastIndexOf`, `truncated.slice`.

Alvos de atribuição ou incremento: `truncated`.

SHA-256 do trecho: `4b4e9be102f373a16b27252d961511f2f2529d5a856922aa48c05aba266b09e6`.

### evaluation:430573

Chamadas escritas diretamente neste corpo: `status.slice`, `truncated.lastIndexOf`, `truncated.slice`.

Alvos de atribuição ou incremento: `truncated`.

SHA-256 do trecho: `4b4e9be102f373a16b27252d961511f2f2529d5a856922aa48c05aba266b09e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
