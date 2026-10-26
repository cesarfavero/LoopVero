# `normalizeClaimEmailInboxArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/claim-email-inbox-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764764-764775](../../../../../../../reference/runtime/host-main.cjs#L764764-L764775) | `FunctionDeclaration` | não | `args` |
| [evaluation:558132-558143](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558132-L558143) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764764-764775](../../../../../../../reference/runtime/host-main.cjs#L764764-L764775) | 2 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:558132-558143](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558132-L558143) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:764764

Chamadas escritas diretamente neste corpo: `args.display_name.trim`, `new SandToolInputError`, `parseClaimEmailUsername`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `8c97bcd9a60881dc22e7ee5266f99280956dad2a09052eb23086d80e8a544ccb`.

### evaluation:558132

Chamadas escritas diretamente neste corpo: `args.display_name.trim`, `new SandToolInputError`, `parseClaimEmailUsername`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `8c97bcd9a60881dc22e7ee5266f99280956dad2a09052eb23086d80e8a544ccb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
