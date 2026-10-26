# `Walker.navigationArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750250-750275](../../../../../../../../reference/runtime/host-main.cjs#L750250-L750275) | `method` | não | `name18, args, scope` |
| [evaluation:523101-523126](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523101-L523126) | `method` | não | `name18, args, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750250-750275](../../../../../../../../reference/runtime/host-main.cjs#L750250-L750275) | 10 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:523101-523126](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523101-L523126) | 10 | 1 | 0 | 1 | 0 | 0 |

### host:750250

Chamadas escritas diretamente neste corpo: `fail2`, `isInlineFunction`, `this.dataOnly`, `this.expr`.

SHA-256 do trecho: `138d007d117f3b78740ddd213ff41affcd163b31d0b37248073ebfcd81f61cbc`.

### evaluation:523101

Chamadas escritas diretamente neste corpo: `fail`, `isInlineFunction`, `this.dataOnly`, `this.expr`.

SHA-256 do trecho: `8146ee1a2f90a1df6a9295c27069b4b3917c9f24904d61b6ac028438e1ffc5ef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
