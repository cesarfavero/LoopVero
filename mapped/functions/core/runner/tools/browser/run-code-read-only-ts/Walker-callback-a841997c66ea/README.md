# `Walker.callback`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750130-750140](../../../../../../../../reference/runtime/host-main.cjs#L750130-L750140) | `method` | não | `fn, scope, paramKinds` |
| [evaluation:522981-522991](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522981-L522991) | `method` | não | `fn, scope, paramKinds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750130-750140](../../../../../../../../reference/runtime/host-main.cjs#L750130-L750140) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522981-522991](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522981-L522991) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750130

Chamadas escritas diretamente neste corpo: `fail2`, `fn.params.forEach`, `new Scope3`, `this.functionBody`.

Alvos de atribuição ou incremento: `this.callbackDepth`.

SHA-256 do trecho: `333077d614950ef57ea91a1d639f68d4277b4dbe3ad577f5fb0d3f95552390a5`.

### evaluation:522981

Chamadas escritas diretamente neste corpo: `fail`, `fn.params.forEach`, `new Scope3`, `this.functionBody`.

Alvos de atribuição ou incremento: `this.callbackDepth`.

SHA-256 do trecho: `5065d34a5dfb332f59aa42f871881fd69aa6c927584d0298a01a9087cf08cea6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
