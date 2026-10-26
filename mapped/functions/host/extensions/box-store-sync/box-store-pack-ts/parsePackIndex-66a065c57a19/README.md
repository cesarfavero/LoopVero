# `parsePackIndex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-pack.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478485-478497](../../../../../../../reference/runtime/host-main.cjs#L478485-L478497) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478485-478497](../../../../../../../reference/runtime/host-main.cjs#L478485-L478497) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:478485

Chamadas escritas diretamente neste corpo: `JSON.parse`, `packIndexSchema.safeParse`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `70762e8bd2b36271dc4df7671c4297ea39ee08711dfd6c56d878af1c3a9039bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
