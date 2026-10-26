# `readSlackPartnerProfileName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735316-735325](../../../../../../../reference/runtime/host-main.cjs#L735316-L735325) | `FunctionDeclaration` | sim | `execute, route` |
| [evaluation:540881-540890](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540881-L540890) | `FunctionDeclaration` | sim | `execute, route` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735316-735325](../../../../../../../reference/runtime/host-main.cjs#L735316-L735325) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:540881-540890](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540881-L540890) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:735316

Chamadas escritas diretamente neste corpo: `SLACK_USER_ID.test`, `execute`, `parseSlackProfileDisplayName`.

SHA-256 do trecho: `9462b5f63345e4416268f20bc915bf3a283f8229295f4db428e0d262b876500c`.

### evaluation:540881

Chamadas escritas diretamente neste corpo: `SLACK_USER_ID.test`, `execute`, `parseSlackProfileDisplayName`.

SHA-256 do trecho: `9462b5f63345e4416268f20bc915bf3a283f8229295f4db428e0d262b876500c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
