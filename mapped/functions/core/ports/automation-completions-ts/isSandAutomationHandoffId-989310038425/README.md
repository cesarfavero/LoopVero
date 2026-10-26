# `isSandAutomationHandoffId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/ports/automation-completions.ts` · [README do módulo](../../../../../modules/core/ports/automation-completions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716987-716989](../../../../../../reference/runtime/host-main.cjs#L716987-L716989) | `FunctionDeclaration` | não | `id` |
| [evaluation:586328-586330](../../../../../../reference/runtime/sand-eval-runner.cjs#L586328-L586330) | `FunctionDeclaration` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716987-716989](../../../../../../reference/runtime/host-main.cjs#L716987-L716989) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:586328-586330](../../../../../../reference/runtime/sand-eval-runner.cjs#L586328-L586330) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716987

Chamadas escritas diretamente neste corpo: `id.startsWith`.

SHA-256 do trecho: `160a377e3ab496daece94156a2928925812e3dcd0a85620e871d9dddf3dd0ac4`.

### evaluation:586328

Chamadas escritas diretamente neste corpo: `id.startsWith`.

SHA-256 do trecho: `160a377e3ab496daece94156a2928925812e3dcd0a85620e871d9dddf3dd0ac4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
