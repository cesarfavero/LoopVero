# `parsePackRetired`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-pack.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478498-478510](../../../../../../../reference/runtime/host-main.cjs#L478498-L478510) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478498-478510](../../../../../../../reference/runtime/host-main.cjs#L478498-L478510) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:478498

Chamadas escritas diretamente neste corpo: `JSON.parse`, `packRetiredSchema.safeParse`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `c55c76b114f4a2bb0a3f11bc695c58b7fb8663b1c802f7c5d4944a5a2cc735d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
