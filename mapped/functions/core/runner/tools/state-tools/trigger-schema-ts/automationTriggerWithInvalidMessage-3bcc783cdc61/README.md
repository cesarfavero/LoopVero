# `automationTriggerWithInvalidMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/trigger-schema.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/trigger-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762493-762502](../../../../../../../../reference/runtime/host-main.cjs#L762493-L762502) | `FunctionDeclaration` | não | `copy, invalidMessage` |
| [evaluation:555103-555112](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555103-L555112) | `FunctionDeclaration` | não | `copy, invalidMessage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762493-762502](../../../../../../../../reference/runtime/host-main.cjs#L762493-L762502) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:555103-555112](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555103-L555112) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762493

Chamadas escritas diretamente neste corpo: `.transform`, `automationTriggerSchema`, `external_exports2.unknown`.

SHA-256 do trecho: `3a7e38ba06f5c5c2c58927d80916264958c5b1d8936e5890670be7ee9e79476b`.

### evaluation:555103

Chamadas escritas diretamente neste corpo: `.transform`, `automationTriggerSchema`, `external_exports3.unknown`.

SHA-256 do trecho: `d1c11439ce2d729772a3b66c86ca5c534c3e08816db6d2f425b1cce897c137ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
