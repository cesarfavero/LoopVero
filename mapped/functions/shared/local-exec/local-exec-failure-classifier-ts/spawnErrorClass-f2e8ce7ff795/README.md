# `spawnErrorClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/local-exec/local-exec-failure-classifier.ts` · [README do módulo](../../../../../modules/shared/local-exec/local-exec-failure-classifier-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226140-226144](../../../../../../reference/runtime/host-main.cjs#L226140-L226144) | `FunctionDeclaration` | não | `rawErrno` |
| [evaluation:479029-479033](../../../../../../reference/runtime/sand-eval-runner.cjs#L479029-L479033) | `FunctionDeclaration` | não | `rawErrno` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226140-226144](../../../../../../reference/runtime/host-main.cjs#L226140-L226144) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:479029-479033](../../../../../../reference/runtime/sand-eval-runner.cjs#L479029-L479033) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:226140

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `78849e739e663a0c70757da8f5552bc0e951b781e17b59faef013ed58a7d99b5`.

### evaluation:479029

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `78849e739e663a0c70757da8f5552bc0e951b781e17b59faef013ed58a7d99b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
