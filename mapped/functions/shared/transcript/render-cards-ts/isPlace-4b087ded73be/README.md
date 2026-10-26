# `isPlace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/render-cards.ts` · [README do módulo](../../../../../modules/shared/transcript/render-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707852-707854](../../../../../../reference/runtime/host-main.cjs#L707852-L707854) | `FunctionDeclaration` | não | `value` |
| [evaluation:564339-564341](../../../../../../reference/runtime/sand-eval-runner.cjs#L564339-L564341) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707852-707854](../../../../../../reference/runtime/host-main.cjs#L707852-L707854) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564339-564341](../../../../../../reference/runtime/sand-eval-runner.cjs#L564339-L564341) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707852

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isNonEmptyString3`, `isOptional`, `isUnknownRecord2`, `value.photos.every`.

SHA-256 do trecho: `db50e90e7b067f4eb1f0abf2b10b27f8481abaf76bfc72db9803c63fe0ea2330`.

### evaluation:564339

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isNonEmptyString2`, `isOptional`, `isUnknownRecord2`, `value.photos.every`.

SHA-256 do trecho: `ce595d60c6f3895a0e3b5d553f1449e989caeb67c6493d93a26e74c52d4669f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
