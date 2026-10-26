# `sandClientBaseVersionOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/sand-client-metadata.ts` · [README do módulo](../../../../../modules/shared/node/sand-client-metadata-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175797-175801](../../../../../../reference/runtime/host-main.cjs#L175797-L175801) | `FunctionDeclaration` | não | `clientAppVersion` |
| [evaluation:511743-511747](../../../../../../reference/runtime/sand-eval-runner.cjs#L511743-L511747) | `FunctionDeclaration` | não | `clientAppVersion` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175797-175801](../../../../../../reference/runtime/host-main.cjs#L175797-L175801) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511743-511747](../../../../../../reference/runtime/sand-eval-runner.cjs#L511743-L511747) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:175797

Chamadas escritas diretamente neste corpo: `stampedVersionBaseOf`.

SHA-256 do trecho: `cde7d4dfc471715ffe8d5b637bd2228de598249332efee53f6aa8f336b8ca405`.

### evaluation:511743

Chamadas escritas diretamente neste corpo: `stampedVersionBaseOf`.

SHA-256 do trecho: `cde7d4dfc471715ffe8d5b637bd2228de598249332efee53f6aa8f336b8ca405`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
