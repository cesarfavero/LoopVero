# `parseSlackSenderIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735171-735180](../../../../../../../reference/runtime/host-main.cjs#L735171-L735180) | `FunctionDeclaration` | não | `authedProfileText` |
| [evaluation:540745-540754](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540745-L540754) | `FunctionDeclaration` | não | `authedProfileText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735171-735180](../../../../../../../reference/runtime/host-main.cjs#L735171-L735180) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540745-540754](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540745-L540754) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:735171

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `parseAuthedWorkspace`, `slackProfileField`, `slackProfileSelfNames`.

SHA-256 do trecho: `1d79f95a2b7dfe718194e09ad14b7ad5e4e6e0f7fe0bdcbc032a0050ac8a7826`.

### evaluation:540745

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `parseAuthedWorkspace`, `slackProfileField`, `slackProfileSelfNames`.

SHA-256 do trecho: `1d79f95a2b7dfe718194e09ad14b7ad5e4e6e0f7fe0bdcbc032a0050ac8a7826`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
