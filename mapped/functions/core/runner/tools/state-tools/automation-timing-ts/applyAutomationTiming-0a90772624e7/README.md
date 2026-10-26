# `applyAutomationTiming`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/tools/state-tools/automation-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/automation-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761964-761993](../../../../../../../../reference/runtime/host-main.cjs#L761964-L761993) | `FunctionDeclaration` | não | `{   trigger: trigger2,   args,   existing,   writeSetsTrigger,   offered }` |
| [evaluation:554542-554571](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554542-L554571) | `FunctionDeclaration` | não | `{   trigger,   args,   existing,   writeSetsTrigger,   offered }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761964-761993](../../../../../../../../reference/runtime/host-main.cjs#L761964-L761993) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:554542-554571](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554542-L554571) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:761964

Chamadas escritas diretamente neste corpo: `chosenByModel`, `cronMembers`, `withCronMembers`, `withoutCronTiming`.

SHA-256 do trecho: `3129a7b13aa62a6efa2189873edc8a34b4fa8eaa8ce8871aa0b7b7db829ff945`.

### evaluation:554542

Chamadas escritas diretamente neste corpo: `chosenByModel`, `cronMembers`, `withCronMembers`, `withoutCronTiming`.

SHA-256 do trecho: `11bf33128b9586223f75d0491c49feba46e75fb892ad73bb52f868c463352b84`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
