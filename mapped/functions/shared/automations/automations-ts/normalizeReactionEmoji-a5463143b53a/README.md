# `normalizeReactionEmoji`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automations.ts` · [README do módulo](../../../../../modules/shared/automations/automations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485459-485462](../../../../../../reference/runtime/host-main.cjs#L485459-L485462) | `FunctionDeclaration` | não | `raw` |
| [evaluation:475191-475194](../../../../../../reference/runtime/sand-eval-runner.cjs#L475191-L475194) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485459-485462](../../../../../../reference/runtime/host-main.cjs#L485459-L485462) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475191-475194](../../../../../../reference/runtime/sand-eval-runner.cjs#L475191-L475194) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485459

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `.trim`, `bare.split`, `raw.trim`.

SHA-256 do trecho: `22ca730578b19eabc8e1cca8c6ba748dd81def48e5649264f03b6a6093379a40`.

### evaluation:475191

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `.trim`, `bare.split`, `raw.trim`.

SHA-256 do trecho: `22ca730578b19eabc8e1cca8c6ba748dd81def48e5649264f03b6a6093379a40`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
