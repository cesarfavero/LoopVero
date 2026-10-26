# `sanitizeRemoteUrlForPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639850-639863](../../../../../../reference/runtime/host-main.cjs#L639850-L639863) | `FunctionDeclaration` | não | `remoteUrl` |
| [evaluation:430464-430477](../../../../../../reference/runtime/sand-eval-runner.cjs#L430464-L430477) | `FunctionDeclaration` | não | `remoteUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639850-639863](../../../../../../reference/runtime/host-main.cjs#L639850-L639863) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:430464-430477](../../../../../../reference/runtime/sand-eval-runner.cjs#L430464-L430477) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:639850

Chamadas escritas diretamente neste corpo: `new URL`, `parsedRemoteUrl.toString`, `remoteUrl.trim`.

Alvos de atribuição ou incremento: `parsedRemoteUrl.password`, `parsedRemoteUrl.username`.

SHA-256 do trecho: `76bdf5064d960a349eb2ffaba8f30d3a18ff8b86a62eab1115aefa23280b9600`.

### evaluation:430464

Chamadas escritas diretamente neste corpo: `new URL`, `parsedRemoteUrl.toString`, `remoteUrl.trim`.

Alvos de atribuição ou incremento: `parsedRemoteUrl.password`, `parsedRemoteUrl.username`.

SHA-256 do trecho: `76bdf5064d960a349eb2ffaba8f30d3a18ff8b86a62eab1115aefa23280b9600`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
