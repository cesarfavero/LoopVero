# `selectGateVariant`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537373-537396](../../../../../../reference/runtime/sand-eval-runner.cjs#L537373-L537396) | `FunctionDeclaration` | não | `frozenPromptId, base, variants, isGateOn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537373-537396](../../../../../../reference/runtime/sand-eval-runner.cjs#L537373-L537396) | 4 | 2 | 0 | 2 | 2 | 0 |

### evaluation:537373

Chamadas escritas diretamente neste corpo: `.filter`, `.flatMap`, `.join`, `.sort`, `Object.entries`, `combo.split`, `new Error`, `new Set`, `on.join`, `shard.endsWith`, `shard.slice`, `variants.get`, `variants.keys`.

Alvos de atribuição ou incremento: `composed[computed]`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `4345e0f57040d6e579505983368afaea26e9cd3b2f22afb67b4f71a083c86133`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
