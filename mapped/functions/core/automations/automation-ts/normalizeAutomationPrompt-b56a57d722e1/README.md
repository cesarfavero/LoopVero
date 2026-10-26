# `normalizeAutomationPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation.ts` · [README do módulo](../../../../../modules/core/automations/automation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715074-715076](../../../../../../reference/runtime/host-main.cjs#L715074-L715076) | `FunctionDeclaration` | não | `prompt` |
| [evaluation:527197-527199](../../../../../../reference/runtime/sand-eval-runner.cjs#L527197-L527199) | `FunctionDeclaration` | não | `prompt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715074-715076](../../../../../../reference/runtime/host-main.cjs#L715074-L715076) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527197-527199](../../../../../../reference/runtime/sand-eval-runner.cjs#L527197-L527199) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715074

Chamadas escritas diretamente neste corpo: `prompt.trim`.

SHA-256 do trecho: `865e81b4c4acaedf59821a9348270a4d08cc4ec3b0857f7596e35867718c2f93`.

### evaluation:527197

Chamadas escritas diretamente neste corpo: `prompt.trim`.

SHA-256 do trecho: `865e81b4c4acaedf59821a9348270a4d08cc4ec3b0857f7596e35867718c2f93`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
