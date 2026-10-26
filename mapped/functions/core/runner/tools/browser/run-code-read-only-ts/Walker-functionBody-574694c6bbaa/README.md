# `Walker.functionBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:749733-749745](../../../../../../../../reference/runtime/host-main.cjs#L749733-L749745) | `method` | não | `fn, scope` |
| [evaluation:522584-522596](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522584-L522596) | `method` | não | `fn, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749733-749745](../../../../../../../../reference/runtime/host-main.cjs#L749733-L749745) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:522584-522596](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522584-L522596) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:749733

Chamadas escritas diretamente neste corpo: `fail2`, `returns.reduce`, `this.block`, `this.expr`.

Alvos de atribuição ou incremento: `this.returns`.

SHA-256 do trecho: `5516efdb1d71684c7314dd339c89c63b9a72397fad6119698de20cbfa006e39d`.

### evaluation:522584

Chamadas escritas diretamente neste corpo: `fail`, `returns.reduce`, `this.block`, `this.expr`.

Alvos de atribuição ou incremento: `this.returns`.

SHA-256 do trecho: `85ee837df2738c71dc953155323e718cf4279ae7639773cd157f74691635da37`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
