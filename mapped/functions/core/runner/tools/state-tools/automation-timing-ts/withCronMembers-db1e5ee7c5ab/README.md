# `withCronMembers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/tools/state-tools/automation-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/automation-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761954-761960](../../../../../../../../reference/runtime/host-main.cjs#L761954-L761960) | `FunctionDeclaration` | não | `trigger2, choose` |
| [evaluation:554532-554538](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554532-L554538) | `FunctionDeclaration` | não | `trigger, choose` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761954-761960](../../../../../../../../reference/runtime/host-main.cjs#L761954-L761960) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554532-554538](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554532-L554538) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761954

Chamadas escritas diretamente neste corpo: `.map`, `triggerFromList`, `triggerList`.

SHA-256 do trecho: `7a862cba240c13c1a94dc2bd1eff1aaa5e67e56d1c9adf86c82464babd479357`.

### evaluation:554532

Chamadas escritas diretamente neste corpo: `.map`, `triggerFromList`, `triggerList`.

SHA-256 do trecho: `fd3743883d4adfc7461ed47e8850aec0dcf2bf942286eee318669057519dfb99`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
