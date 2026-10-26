# `Walker.playwrightArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750099-750112](../../../../../../../../reference/runtime/host-main.cjs#L750099-L750112) | `method` | não | `args, scope, paramKinds` |
| [evaluation:522950-522963](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522950-L522963) | `method` | não | `args, scope, paramKinds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750099-750112](../../../../../../../../reference/runtime/host-main.cjs#L750099-L750112) | 3 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:522950-522963](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522950-L522963) | 3 | 1 | 0 | 0 | 0 | 0 |

### host:750099

Chamadas escritas diretamente neste corpo: `fail2`, `isInlineFunction`, `this.callback`, `this.playwrightOptions`, `this.playwrightValue`.

SHA-256 do trecho: `04a4138588c8812cb25625d5a3c4a4b4008cc0a14a356546d08f32a492fac0f5`.

### evaluation:522950

Chamadas escritas diretamente neste corpo: `fail`, `isInlineFunction`, `this.callback`, `this.playwrightOptions`, `this.playwrightValue`.

SHA-256 do trecho: `d0d8f3803892b959919c80b8eafe00722559e5bdc9d8a57d05428cf4d87803cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
