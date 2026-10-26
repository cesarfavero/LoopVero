# `verifyAgentInboxDraft`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/agent-inbox-drafts.ts` · [README do módulo](../../../../../modules/core/email/agent-inbox-drafts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734924-734986](../../../../../../reference/runtime/host-main.cjs#L734924-L734986) | `FunctionDeclaration` | sim | `args` |
| [evaluation:539348-539410](../../../../../../reference/runtime/sand-eval-runner.cjs#L539348-L539410) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734924-734986](../../../../../../reference/runtime/host-main.cjs#L734924-L734986) | 11 | 0 | 2 | 11 | 0 | 1 |
| [evaluation:539348-539410](../../../../../../reference/runtime/sand-eval-runner.cjs#L539348-L539410) | 11 | 0 | 2 | 11 | 0 | 1 |

### host:734924

Chamadas escritas diretamente neste corpo: `addresses.join`, `args.from.toLowerCase`, `attachmentPaths`, `describe5`, `described2.map`, `errorMessage`, `ownedInboxes`, `sendingAddressOwnership`.

Alvos de atribuição ou incremento: `described2`.

SHA-256 do trecho: `b9a8a3c1ef654481534655616bf04c05d3fc043f2dfe890e9e704647fb413a46`.

### evaluation:539348

Chamadas escritas diretamente neste corpo: `addresses.join`, `args.from.toLowerCase`, `attachmentPaths`, `describe4`, `described2.map`, `errorMessage2`, `ownedInboxes`, `sendingAddressOwnership`.

Alvos de atribuição ou incremento: `described2`.

SHA-256 do trecho: `a4582a44c80572f218d3c375712afc4d623451417680569c4cd05b9f0d77f9be`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
