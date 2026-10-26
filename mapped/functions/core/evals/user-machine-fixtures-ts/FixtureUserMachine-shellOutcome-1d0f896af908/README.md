# `FixtureUserMachine.shellOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596347-596349](../../../../../../reference/runtime/sand-eval-runner.cjs#L596347-L596349) | `method` | não | `command` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596347-596349](../../../../../../reference/runtime/sand-eval-runner.cjs#L596347-L596349) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596347

Chamadas escritas diretamente neste corpo: `normalizeFixtureCommand`, `this.shellRules.get`.

SHA-256 do trecho: `eeeb51227d77e85b794e3b0d7545d814bdec3210d6f74814ceb330c839471635`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
