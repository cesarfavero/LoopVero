# `FixtureUserMachine.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596328-596343](../../../../../../reference/runtime/sand-eval-runner.cjs#L596328-L596343) | `method` | não | `fixture` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596328-596343](../../../../../../reference/runtime/sand-eval-runner.cjs#L596328-L596343) | 1 | 1 | 0 | 0 | 0 | 0 |

### evaluation:596328

Chamadas escritas diretamente neste corpo: `encoder2.encode`, `fixture.shell.map`, `import_node_path43.posix.join`, `new Map`, `new TextEncoder`, `offlineMessage`, `this.files.set`, `this.normalizePath`, `writeRefusalMessage`.

Alvos de atribuição ou incremento: `this.homeDir`, `this.id`, `this.label`, `this.offlineMessage`, `this.shellRules`, `this.terminalsFolder`, `this.unmatchedShell`, `this.writeRefusal`.

SHA-256 do trecho: `dac53a4bd62a8521f30b3894dad21753825eb066711a3a3a43c8a6349be0e44c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
