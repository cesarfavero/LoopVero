# `Walker.globalCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750186-750198](../../../../../../../../reference/runtime/host-main.cjs#L750186-L750198) | `method` | não | `object4, name18, args, scope` |
| [evaluation:523037-523049](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523037-L523049) | `method` | não | `object4, name18, args, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750186-750198](../../../../../../../../reference/runtime/host-main.cjs#L750186-L750198) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523037-523049](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523037-L523049) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:750186

Chamadas escritas diretamente neste corpo: `allowed.has`, `elementOf`, `fail2`, `isDataLike`, `own2`, `this.dataOnly`, `this.expr`, `this.plainArgs`.

SHA-256 do trecho: `e058ff0019ebb2a0e867793df239634526d200e9ad8be9ecf9c059425e7549de`.

### evaluation:523037

Chamadas escritas diretamente neste corpo: `allowed.has`, `elementOf`, `fail`, `isDataLike`, `own2`, `this.dataOnly`, `this.expr`, `this.plainArgs`.

SHA-256 do trecho: `1c410831875ec9f13b8f7a267be766183b77020e2bed146e970938fec9b740c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
