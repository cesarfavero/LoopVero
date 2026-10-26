# `flatCopy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722133-722135](../../../../../../reference/runtime/host-main.cjs#L722133-L722135) | `FunctionDeclaration` | não | `slice` |
| [evaluation:540110-540112](../../../../../../reference/runtime/sand-eval-runner.cjs#L540110-L540112) | `FunctionDeclaration` | não | `slice` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722133-722135](../../../../../../reference/runtime/host-main.cjs#L722133-L722135) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540110-540112](../../../../../../reference/runtime/sand-eval-runner.cjs#L540110-L540112) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:722133

Chamadas escritas diretamente neste corpo: `.join`, `slice.split`.

SHA-256 do trecho: `dca83918e21124fa85c4e20db5bcb2c2946402b9a95b5fcad0da4281c4e8277a`.

### evaluation:540110

Chamadas escritas diretamente neste corpo: `.join`, `slice.split`.

SHA-256 do trecho: `dca83918e21124fa85c4e20db5bcb2c2946402b9a95b5fcad0da4281c4e8277a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
