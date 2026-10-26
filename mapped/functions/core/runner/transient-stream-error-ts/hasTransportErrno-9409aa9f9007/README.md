# `hasTransportErrno`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736341-736353](../../../../../../reference/runtime/host-main.cjs#L736341-L736353) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736341-736353](../../../../../../reference/runtime/host-main.cjs#L736341-L736353) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:736341

Chamadas escritas diretamente neste corpo: `TRANSPORT_ERRNO_CODES.has`, `fields3.code.toUpperCase`, `new Set`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `2f9fb1f43a30f036489f719b6dba0d12c0ccd0f78bfb5695180782dc826ea598`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
