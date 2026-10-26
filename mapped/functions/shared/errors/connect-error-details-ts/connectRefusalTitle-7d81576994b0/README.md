# `connectRefusalTitle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/connect-error-details.ts` · [README do módulo](../../../../../modules/shared/errors/connect-error-details-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505354-505362](../../../../../../reference/runtime/host-main.cjs#L505354-L505362) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505354-505362](../../../../../../reference/runtime/host-main.cjs#L505354-L505362) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:505354

Chamadas escritas diretamente neste corpo: `entry.details.title.trim`, `error64.findDetails`, `isConnectRefusal`.

SHA-256 do trecho: `4cc76dce38bc547cfd24291741f8c7ead14f619c002e87d22a2e9bec4879581b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
