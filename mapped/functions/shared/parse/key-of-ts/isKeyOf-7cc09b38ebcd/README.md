# `isKeyOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/parse/key-of.ts` · [README do módulo](../../../../../modules/shared/parse/key-of-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225910-225912](../../../../../../reference/runtime/host-main.cjs#L225910-L225912) | `FunctionDeclaration` | não | `table, key` |
| [evaluation:475113-475115](../../../../../../reference/runtime/sand-eval-runner.cjs#L475113-L475115) | `FunctionDeclaration` | não | `table, key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225910-225912](../../../../../../reference/runtime/host-main.cjs#L225910-L225912) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475113-475115](../../../../../../reference/runtime/sand-eval-runner.cjs#L475113-L475115) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225910

Chamadas escritas diretamente neste corpo: `Object.hasOwn`.

SHA-256 do trecho: `401a1efc212b7d3e7d1406a3a58cd110d761e6c2b7f2af962ee95e5a4d03fe25`.

### evaluation:475113

Chamadas escritas diretamente neste corpo: `Object.hasOwn`.

SHA-256 do trecho: `401a1efc212b7d3e7d1406a3a58cd110d761e6c2b7f2af962ee95e5a4d03fe25`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
