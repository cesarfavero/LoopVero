# `named`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/ios-control-home.ts` · [README do módulo](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758751-758753](../../../../../../reference/runtime/host-main.cjs#L758751-L758753) | `FunctionDeclaration` | não | `{ accessories }` |
| [evaluation:548911-548913](../../../../../../reference/runtime/sand-eval-runner.cjs#L548911-L548913) | `FunctionDeclaration` | não | `{ accessories }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758751-758753](../../../../../../reference/runtime/host-main.cjs#L758751-L758753) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548911-548913](../../../../../../reference/runtime/sand-eval-runner.cjs#L548911-L548913) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:758751

Chamadas escritas diretamente neste corpo: `accessories.map`, `listOf3`.

SHA-256 do trecho: `a583a93b46106f4330d47833ce764b90b1e18f8f06faae9615490938045c5734`.

### evaluation:548911

Chamadas escritas diretamente neste corpo: `accessories.map`, `listOf3`.

SHA-256 do trecho: `a583a93b46106f4330d47833ce764b90b1e18f8f06faae9615490938045c5734`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
