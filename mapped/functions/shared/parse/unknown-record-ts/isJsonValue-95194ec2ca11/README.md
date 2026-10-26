# `isJsonValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/parse/unknown-record.ts` · [README do módulo](../../../../../modules/shared/parse/unknown-record-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:155304-155317](../../../../../../reference/runtime/host-main.cjs#L155304-L155317) | `FunctionDeclaration` | não | `value` |
| [evaluation:479656-479669](../../../../../../reference/runtime/sand-eval-runner.cjs#L479656-L479669) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155304-155317](../../../../../../reference/runtime/host-main.cjs#L155304-L155317) | 7 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:479656-479669](../../../../../../reference/runtime/sand-eval-runner.cjs#L479656-L479669) | 7 | 0 | 0 | 5 | 0 | 0 |

### host:155304

Chamadas escritas diretamente neste corpo: `.every`, `Array.isArray`, `Number.isFinite`, `Object.values`, `isUnknownRecord2`, `value.every`.

SHA-256 do trecho: `e2a6463cd4d9d6c6cfe96071a2ecf48251d101703cb4050627895298589b7568`.

### evaluation:479656

Chamadas escritas diretamente neste corpo: `.every`, `Array.isArray`, `Number.isFinite`, `Object.values`, `isUnknownRecord2`, `value.every`.

SHA-256 do trecho: `e2a6463cd4d9d6c6cfe96071a2ecf48251d101703cb4050627895298589b7568`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
