# `adoptRemoteParent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/send-trace-host.ts` · [README do módulo](../../../../modules/core/send-trace-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:484122-484141](../../../../../reference/runtime/host-main.cjs#L484122-L484141) | `FunctionDeclaration` | não | `traceparent, spanName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:484122-484141](../../../../../reference/runtime/host-main.cjs#L484122-L484141) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:484122

Chamadas escritas diretamente neste corpo: `createContext`, `createContextFromSpanContext`, `getSpan2`, `new DisposableSpan`, `parseTraceparent`.

SHA-256 do trecho: `a6befc6ed2ce82222a1561bde22162044813afa23147d9b15c60c507ca8bc1bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
