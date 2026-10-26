# `pruneSpillDumps`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/spill-dump-prune.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/spill-dump-prune-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680873-680903](../../../../../../../reference/runtime/host-main.cjs#L680873-L680903) | `FunctionDeclaration` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680873-680903](../../../../../../../reference/runtime/host-main.cjs#L680873-L680903) | 3 | 2 | 3 | 1 | 0 | 2 |

### host:680873

Chamadas escritas diretamente neste corpo: `errorLogTag`, `info2.isFile`, `isMissingPathError`, `options2.log`.

Alvos de atribuição ou incremento: `freedBytes`, `names3`, `removed`.

SHA-256 do trecho: `00bb1ac82949e5d790e09b412317a168085d493fc1d94b5dfa21a946dd595a40`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
