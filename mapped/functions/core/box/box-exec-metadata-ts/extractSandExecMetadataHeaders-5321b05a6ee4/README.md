# `extractSandExecMetadataHeaders`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-exec-metadata.ts` · [README do módulo](../../../../../modules/core/box/box-exec-metadata-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:678945-678960](../../../../../../reference/runtime/host-main.cjs#L678945-L678960) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:678945-678960](../../../../../../reference/runtime/host-main.cjs#L678945-L678960) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:678945

Chamadas escritas diretamente neste corpo: `ctx.get`, `getConversationId`, `getRequestId`, `isExecMetadataHeaderValue`.

Alvos de atribuição ou incremento: `headers[computed]`.

SHA-256 do trecho: `bd65502ea5641b60fb864553a4516d3eaa59f3ebd35d7ab6854d5c29c4475247`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
