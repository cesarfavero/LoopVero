# `SandEvalContinuationControl.abandon`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/eval-continuation-control.ts` · [README do módulo](../../../../../modules/core/automations/eval-continuation-control-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628639-628642](../../../../../../reference/runtime/sand-eval-runner.cjs#L628639-L628642) | `method` | sim | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628639-628642](../../../../../../reference/runtime/sand-eval-runner.cjs#L628639-L628642) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:628639

Chamadas escritas diretamente neste corpo: `this.call`, `this.status`.

SHA-256 do trecho: `e0b6be48882a0301fdce4640fddadf7950e39cca7cfc923d24a2067a224f46f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
