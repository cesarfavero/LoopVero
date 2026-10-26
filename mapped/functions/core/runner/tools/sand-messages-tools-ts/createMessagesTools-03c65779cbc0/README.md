# `createMessagesTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778232-778307](../../../../../../../reference/runtime/host-main.cjs#L778232-L778307) | `FunctionDeclaration` | não | `deps` |
| [evaluation:577967-578042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577967-L578042) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778232-778307](../../../../../../../reference/runtime/host-main.cjs#L778232-L778307) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577967-578042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577967-L578042) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:778232

Chamadas escritas diretamente neste corpo: `createFetchAttachmentTool`, `defineCommunicateTool`, `gateMessagesOnGrants`, `instrumentMessages`.

SHA-256 do trecho: `aa2fbc2126c707d8272f0f36744f62ffe0e40cc2a4516f903010790b50e389f7`.

### evaluation:577967

Chamadas escritas diretamente neste corpo: `createFetchAttachmentTool`, `defineCommunicateTool`, `gateMessagesOnGrants`, `instrumentMessages`.

SHA-256 do trecho: `b597fc2935a1b9a2f4e52619e15c5c2a7a29be3b7611f11e05ea8b54664037e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
