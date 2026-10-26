# `hasWordAt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491338-491349](../../../../../../reference/runtime/host-main.cjs#L491338-L491349) | `FunctionDeclaration` | não | `lower, handle` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491338-491349](../../../../../../reference/runtime/host-main.cjs#L491338-L491349) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:491338

Chamadas escritas diretamente neste corpo: `isEmailPathOrHandleGlue`, `isNameChar`, `lower.indexOf`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `4886c8732afcadfea435f4a9c8e8d71275a7b80c50e37fea56661a8cbdc6d1e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
