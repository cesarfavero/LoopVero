# `_MeetingSites.orList`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772477-772479](../../../../../../reference/runtime/host-main.cjs#L772477-L772479) | `method` | não | `items` |
| [evaluation:571706-571708](../../../../../../reference/runtime/sand-eval-runner.cjs#L571706-L571708) | `method` | não | `items` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772477-772479](../../../../../../reference/runtime/host-main.cjs#L772477-L772479) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571706-571708](../../../../../../reference/runtime/sand-eval-runner.cjs#L571706-L571708) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:772477

Chamadas escritas diretamente neste corpo: `.format`, `new Intl.ListFormat`.

SHA-256 do trecho: `4db65b91a27d2a34642587bc442cd4d87c0fe3d672aa5c5ec0d980a5a2a01fa9`.

### evaluation:571706

Chamadas escritas diretamente neste corpo: `.format`, `new Intl.ListFormat`.

SHA-256 do trecho: `4db65b91a27d2a34642587bc442cd4d87c0fe3d672aa5c5ec0d980a5a2a01fa9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
