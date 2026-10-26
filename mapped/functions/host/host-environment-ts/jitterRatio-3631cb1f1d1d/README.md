# `jitterRatio`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-environment.ts` · [README do módulo](../../../../modules/host/host-environment-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494105-494108](../../../../../reference/runtime/host-main.cjs#L494105-L494108) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494105-494108](../../../../../reference/runtime/host-main.cjs#L494105-L494108) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:494105

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `Number.parseFloat`.

SHA-256 do trecho: `b48970ee7d2bb8c5b0ae2c74b2c8c1b35e4b7fb2af8f00a4c6e05b98ac71a719`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
