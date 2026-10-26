# `buildSandSettingsDeepLinkUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/deep-link.ts` · [README do módulo](../../../../../modules/shared/desktop/deep-link-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489466-489468](../../../../../../reference/runtime/host-main.cjs#L489466-L489468) | `FunctionDeclaration` | não | `anchor2` |
| [evaluation:475602-475604](../../../../../../reference/runtime/sand-eval-runner.cjs#L475602-L475604) | `FunctionDeclaration` | não | `anchor2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489466-489468](../../../../../../reference/runtime/host-main.cjs#L489466-L489468) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475602-475604](../../../../../../reference/runtime/sand-eval-runner.cjs#L475602-L475604) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:489466

Chamadas escritas diretamente neste corpo: `sandDeepLinks.buildUrl`.

SHA-256 do trecho: `db3a87c165be6956a0a781dd983f880fa3978aec2f6275f7d756ee7431dfcd8f`.

### evaluation:475602

Chamadas escritas diretamente neste corpo: `sandDeepLinks.buildUrl`.

SHA-256 do trecho: `db3a87c165be6956a0a781dd983f880fa3978aec2f6275f7d756ee7431dfcd8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
