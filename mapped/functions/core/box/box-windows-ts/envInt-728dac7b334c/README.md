# `envInt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553839-553844](../../../../../../reference/runtime/host-main.cjs#L553839-L553844) | `FunctionDeclaration` | não | `name18, fallback3` |
| [evaluation:534040-534045](../../../../../../reference/runtime/sand-eval-runner.cjs#L534040-L534045) | `FunctionDeclaration` | não | `name18, fallback2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553839-553844](../../../../../../reference/runtime/host-main.cjs#L553839-L553844) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:534040-534045](../../../../../../reference/runtime/sand-eval-runner.cjs#L534040-L534045) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:553839

Chamadas escritas diretamente neste corpo: `Number.isInteger`, `Number.parseInt`, `raw.trim`.

SHA-256 do trecho: `7bd7b08966800732b06e4d1ea0c33df1d14432b5ecb99c1150bfaf20eb0b8553`.

### evaluation:534040

Chamadas escritas diretamente neste corpo: `Number.isInteger`, `Number.parseInt`, `raw.trim`.

SHA-256 do trecho: `478aefd1fde6f1d82413f35b88653882fe1e467a1b61553ae0866ed20d13c06f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
