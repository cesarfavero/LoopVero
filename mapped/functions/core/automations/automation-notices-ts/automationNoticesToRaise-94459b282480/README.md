# `automationNoticesToRaise`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-notices.ts` · [README do módulo](../../../../../modules/core/automations/automation-notices-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:527233-527238](../../../../../../reference/runtime/sand-eval-runner.cjs#L527233-L527238) | `FunctionDeclaration` | não | `automation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:527233-527238](../../../../../../reference/runtime/sand-eval-runner.cjs#L527233-L527238) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:527233

Chamadas escritas diretamente neste corpo: `SAND_AUTOMATION_NOTICES.filter`.

SHA-256 do trecho: `34305ea1994c1154455d0c9d47b40fb9d4cc9750ef213b1f99ca69e2733c2b03`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
