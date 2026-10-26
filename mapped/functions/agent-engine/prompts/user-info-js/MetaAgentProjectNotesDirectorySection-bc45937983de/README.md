# `MetaAgentProjectNotesDirectorySection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640009-640011](../../../../../../reference/runtime/host-main.cjs#L640009-L640011) | `FunctionDeclaration` | não | `{ notesDirectory }` |
| [evaluation:430623-430625](../../../../../../reference/runtime/sand-eval-runner.cjs#L430623-L430625) | `FunctionDeclaration` | não | `{ notesDirectory }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640009-640011](../../../../../../reference/runtime/host-main.cjs#L640009-L640011) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430623-430625](../../../../../../reference/runtime/sand-eval-runner.cjs#L430623-L430625) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640009

Chamadas escritas diretamente neste corpo: `formatMetaAgentNotesDirectoryInstruction`, `jsx`.

SHA-256 do trecho: `0605eb1f87179f48c7ac0c74741e4fdc8cd5645300b80e586812ebeb4674ea1d`.

### evaluation:430623

Chamadas escritas diretamente neste corpo: `formatMetaAgentNotesDirectoryInstruction`, `jsx`.

SHA-256 do trecho: `0605eb1f87179f48c7ac0c74741e4fdc8cd5645300b80e586812ebeb4674ea1d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
