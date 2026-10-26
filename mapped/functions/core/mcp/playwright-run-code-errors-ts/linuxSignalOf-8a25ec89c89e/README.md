# `linuxSignalOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700247-700249](../../../../../../reference/runtime/host-main.cjs#L700247-L700249) | `FunctionDeclaration` | não | `signal` |
| [evaluation:514028-514030](../../../../../../reference/runtime/sand-eval-runner.cjs#L514028-L514030) | `FunctionDeclaration` | não | `signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700247-700249](../../../../../../reference/runtime/host-main.cjs#L700247-L700249) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514028-514030](../../../../../../reference/runtime/sand-eval-runner.cjs#L514028-L514030) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700247

Chamadas escritas diretamente neste corpo: `LINUX_SIGNALS.find`.

SHA-256 do trecho: `df4212e853cd42ab5d2d2610924ce1799663761476c9278c1f19c45cc8b97dda`.

### evaluation:514028

Chamadas escritas diretamente neste corpo: `LINUX_SIGNALS.find`.

SHA-256 do trecho: `df4212e853cd42ab5d2d2610924ce1799663761476c9278c1f19c45cc8b97dda`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
