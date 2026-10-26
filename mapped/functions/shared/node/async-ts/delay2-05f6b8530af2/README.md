# `delay2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/async.ts` · [README do módulo](../../../../../modules/shared/node/async-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:474701-474703](../../../../../../reference/runtime/sand-eval-runner.cjs#L474701-L474703) | `FunctionDeclaration` | não | `ms2, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:474701-474703](../../../../../../reference/runtime/sand-eval-runner.cjs#L474701-L474703) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:474701

Chamadas escritas diretamente neste corpo: `delayWith`.

SHA-256 do trecho: `569197d73e347718ae2ed2a8ff1a25ff41739fb36e016b2006656dc6100539f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
