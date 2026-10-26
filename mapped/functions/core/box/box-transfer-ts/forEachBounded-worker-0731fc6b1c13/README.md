# `forEachBounded/worker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-transfer.ts` · [README do módulo](../../../../../modules/core/box/box-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476521-476531](../../../../../../reference/runtime/host-main.cjs#L476521-L476531) | `FunctionDeclaration` | sim | `(nenhum)` |
| [evaluation:515660-515670](../../../../../../reference/runtime/sand-eval-runner.cjs#L515660-L515670) | `FunctionDeclaration` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476521-476531](../../../../../../reference/runtime/host-main.cjs#L476521-L476531) | 0 | 1 | 1 | 0 | 1 | 1 |
| [evaluation:515660-515670](../../../../../../reference/runtime/sand-eval-runner.cjs#L515660-L515670) | 0 | 1 | 1 | 0 | 1 | 1 |

### host:476521

Chamadas escritas diretamente neste corpo: `fn`.

Alvos de atribuição ou incremento: `cursor`, `isAborted3`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `0c2f4f95fbf9b0dd400a673b898890eb798997e696709bf2f3a4988c0a332fc7`.

### evaluation:515660

Chamadas escritas diretamente neste corpo: `fn`.

Alvos de atribuição ou incremento: `cursor`, `isAborted3`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `02be5ae6d805e089c5184b1ce3b213a19bed43f92d9116cde321a388c626d367`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
