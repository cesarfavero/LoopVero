# `getDefaultAgentMetadata`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/isolation/README.md).

**Módulo:** `agent-kv/agent-store.js` · [README do módulo](../../../../modules/agent-kv/agent-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616055-616068](../../../../../reference/runtime/host-main.cjs#L616055-L616068) | `ArrowFunctionExpression` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616055-616068](../../../../../reference/runtime/host-main.cjs#L616055-L616068) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:616055 usa retorno implícito de arrow function.

### host:616055

Chamadas escritas diretamente neste corpo: `Date.now`, `crypto.randomUUID`, `generateBlobEncryptionKeyHex`, `new Uint8Array`.

SHA-256 do trecho: `9a6dc213e73352905f42a89e6bcf43f52a9e09ca084d8c233bfcc2b5ac0bbe47`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
