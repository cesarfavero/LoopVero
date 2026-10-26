# `splitFrozenPromptFiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537323-537342](../../../../../../reference/runtime/sand-eval-runner.cjs#L537323-L537342) | `FunctionDeclaration` | não | `files` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537323-537342](../../../../../../reference/runtime/sand-eval-runner.cjs#L537323-L537342) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:537323

Chamadas escritas diretamente neste corpo: `GATE_FILE.exec`, `HOST_FILE.exec`, `Object.entries`, `new Map`, `variants.get`, `variants.set`.

Alvos de atribuição ou incremento: `base[computed]`, `variant[computed]`.

SHA-256 do trecho: `254bbfedecf4576e8b8ef44880b1e26467546b68e4e57a8a5446a9a42e40ec22`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
