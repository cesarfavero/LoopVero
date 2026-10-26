# `_MeetingSites.parse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772463-772469](../../../../../../reference/runtime/host-main.cjs#L772463-L772469) | `method` | não | `raw` |
| [evaluation:571692-571698](../../../../../../reference/runtime/sand-eval-runner.cjs#L571692-L571698) | `method` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772463-772469](../../../../../../reference/runtime/host-main.cjs#L772463-L772469) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:571692-571698](../../../../../../reference/runtime/sand-eval-runner.cjs#L571692-L571698) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:772463

Chamadas escritas diretamente neste corpo: `site.parse`.

SHA-256 do trecho: `5e752f7fa5b5f553634043c11d4dcd9766c9bc99794b01f90f26c5b0fb96fa4c`.

### evaluation:571692

Chamadas escritas diretamente neste corpo: `site.parse`.

SHA-256 do trecho: `cd1a3733c4638cf2df075a0fceda3c0292e90708cac552e6dd27c9693ba99cfe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
